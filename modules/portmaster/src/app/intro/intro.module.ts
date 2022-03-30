import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OverlayStepperModule, StepperConfig } from "../shared/overlay-stepper";
import { Step1WelcomeComponent } from "./step-1-welcome";
import { Step2TrackersComponent } from "./step-2-trackers";
import { Step3DNSComponent } from "./step-3-dns";
import { Step4TipupsComponent } from "./step-4-tipups";

const steps = [
    Step1WelcomeComponent,
    Step2TrackersComponent,
    Step3DNSComponent,
    Step4TipupsComponent,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: steps
})
export class IntroModule {
  static Stepper: StepperConfig = {
    steps: steps,
    canAbort: (idx) => idx === 0,
  }
}

