import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { share, startWith } from "rxjs/operators";
import { AppProfile, AppProfileService, IPScope, NetqueryConnection, Verdict } from "src/app/services";
import { NetqueryHelper } from "../connection-helper.service";

interface ProfileAttachedConnection extends NetqueryConnection {
  __profile?: AppProfile;
}

@Component({
  selector: 'sfng-netquery-connection-row',
  templateUrl: './conn-row.html',
  styleUrls: [
    './conn-row.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SfngNetqueryConnectionRowComponent implements OnInit, OnDestroy {
  readonly scopes = IPScope;
  readonly verdicts = Verdict;

  @Input()
  set conn(c: ProfileAttachedConnection) {
    this._conn = c;
  }
  get conn() { return this._conn; }
  _conn!: ProfileAttachedConnection;

  @Input()
  activeRevision: number | undefined = 0;

  get isOutdated() {
    // FIXME(ppacher)
    return false;
    /*
        if (!this.conn || !this.helper.profile) {
          return false;
        }
        if (this.helper.profile.currentProfileRevision === -1) {
          // we don't know the revision counter yet ...
          return false;
        }
        return this.conn.profile_revision !== this.helper.profile.currentProfileRevision;
    */
  }

  /* timeAgoTicker ticks every 10000 seconds to force a refresh
     of the timeAgo pipes */
  timeAgoTicker: number = 0;

  private _subscription = Subscription.EMPTY;

  constructor(
    public helper: NetqueryHelper,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this._subscription = new Subscription();

    const tickerSub = interval(10000).pipe(
      startWith(-1),
      share()
    ).subscribe(i => this.timeAgoTicker = i);

    const helperSub = this.helper.refresh.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    })

    this._subscription.add(helperSub);
    this._subscription.add(tickerSub);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
