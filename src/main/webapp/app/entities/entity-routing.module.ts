import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'albaApp.albaRegion.home.title' },
        loadChildren: () => import('./Alba/region/region.module').then(m => m.AlbaRegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'albaApp.albaCountry.home.title' },
        loadChildren: () => import('./Alba/country/country.module').then(m => m.AlbaCountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'albaApp.albaLocation.home.title' },
        loadChildren: () => import('./Alba/location/location.module').then(m => m.AlbaLocationModule),
      },
      {
        path: 'check-point',
        data: { pageTitle: 'albaApp.albaCheckPoint.home.title' },
        loadChildren: () => import('./Alba/check-point/check-point.module').then(m => m.AlbaCheckPointModule),
      },
      {
        path: 'refugee',
        data: { pageTitle: 'albaApp.albaRefugee.home.title' },
        loadChildren: () => import('./Alba/refugee/refugee.module').then(m => m.AlbaRefugeeModule),
      },
      {
        path: 'operator',
        data: { pageTitle: 'albaApp.albaOperator.home.title' },
        loadChildren: () => import('./Alba/operator/operator.module').then(m => m.AlbaOperatorModule),
      },
      {
        path: 'event-type',
        data: { pageTitle: 'albaApp.albaEventType.home.title' },
        loadChildren: () => import('./Alba/event-type/event-type.module').then(m => m.AlbaEventTypeModule),
      },
      {
        path: 'family-relation',
        data: { pageTitle: 'albaApp.albaFamilyRelation.home.title' },
        loadChildren: () => import('./Alba/family-relation/family-relation.module').then(m => m.AlbaFamilyRelationModule),
      },
      {
        path: 'event',
        data: { pageTitle: 'albaApp.albaEvent.home.title' },
        loadChildren: () => import('./Alba/event/event.module').then(m => m.AlbaEventModule),
      },
      {
        path: 'registration',
        data: { pageTitle: 'albaApp.albaRegistration.home.title' },
        loadChildren: () => import('./Alba/registration/registration.module').then(m => m.AlbaRegistrationModule),
      },
      {
        path: 'person',
        data: { pageTitle: 'albaApp.albaPerson.home.title' },
        loadChildren: () => import('./Alba/person/person.module').then(m => m.AlbaPersonModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'albaApp.albaJob.home.title' },
        loadChildren: () => import('./Alba/job/job.module').then(m => m.AlbaJobModule),
      },
      {
        path: 'medical-survey',
        data: { pageTitle: 'albaApp.albaMedicalSurvey.home.title' },
        loadChildren: () => import('./Alba/medical-survey/medical-survey.module').then(m => m.AlbaMedicalSurveyModule),
      },
      {
        path: 'legal-survey',
        data: { pageTitle: 'albaApp.albaLegalSurvey.home.title' },
        loadChildren: () => import('./Alba/legal-survey/legal-survey.module').then(m => m.AlbaLegalSurveyModule),
      },
      {
        path: 'attachment',
        data: { pageTitle: 'albaApp.albaAttachment.home.title' },
        loadChildren: () => import('./Alba/attachment/attachment.module').then(m => m.AlbaAttachmentModule),
      },
      {
        path: 'attachment-category',
        data: { pageTitle: 'albaApp.albaAttachmentCategory.home.title' },
        loadChildren: () => import('./Alba/attachment-category/attachment-category.module').then(m => m.AlbaAttachmentCategoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
