import { Injectable } from '@angular/core';
import { InfoBoxContent } from '../../commons/info-box/info-box.models';
import { ExperienceCompanyDetails, Project } from './experience.models';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class ExperienceService {

  constructor(private translateService: TranslateService) { }

  getBasicInfoAboutExperiences() {
    let basicInfo: InfoBoxContent[] = [];
    Observable.combineLatest(this.translateService.get('EXPERIENCE_company1'),
      this.translateService.get('EXPERIENCE_position1'),
      this.translateService.get('EXPERIENCE_company2'),
      this.translateService.get('EXPERIENCE_position2'),
      this.translateService.get('EXPERIENCE_company3'),
      this.translateService.get('EXPERIENCE_position3'),
      this.translateService.get('EXPERIENCE_company4'),
      this.translateService.get('EXPERIENCE_position4'),
      this.translateService.get('EXPERIENCE_company5'),
      this.translateService.get('EXPERIENCE_position5')).subscribe(translations => {
        basicInfo = [{
          title: translations[0],
          content: translations[1],
        },
        {
          title: translations[2],
          content: translations[3],
        },
        {
          title: translations[4],
          content: translations[5],
        },
        {
          title: translations[6],
          content: translations[7],
        },
        {
          title: translations[8],
          content: translations[9],
        }];
      });
    return basicInfo;
  }

  getDetailsAboutExperience() {
    let experienceCompaniesDetails: ExperienceCompanyDetails[] = [];
    Observable.combineLatest(
      this.translateService.get('EXPERIENCEDETAILS_companyName1'),
      this.translateService.get('EXPERIENCEDETAILS_position1'),
      this.translateService.get('EXPERIENCEDETAILS_startOfWork1'),
      this.translateService.get('EXPERIENCEDETAILS_endOfWork1'),
      this.translateService.get('EXPERIENCEDETAILS_company1experience1'),
      this.translateService.get('EXPERIENCEDETAILS_company1experience2'),
      this.translateService.get('EXPERIENCEDETAILS_company1experience3'),

      this.translateService.get('EXPERIENCEDETAILS_companyName2'),
      this.translateService.get('EXPERIENCEDETAILS_position2'),
      this.translateService.get('EXPERIENCEDETAILS_startOfWork2'),
      this.translateService.get('EXPERIENCEDETAILS_endOfWork2'),
      this.translateService.get('EXPERIENCEDETAILS_company2experience1'),
      this.translateService.get('EXPERIENCEDETAILS_company2experience2'),
      this.translateService.get('EXPERIENCEDETAILS_company2experience3'),

      this.translateService.get('EXPERIENCEDETAILS_companyName3'),
      this.translateService.get('EXPERIENCEDETAILS_position3'),
      this.translateService.get('EXPERIENCEDETAILS_startOfWork3'),
      this.translateService.get('EXPERIENCEDETAILS_endOfWork3'),
      this.translateService.get('EXPERIENCEDETAILS_company3experience1'),
      this.translateService.get('EXPERIENCEDETAILS_company3experience2'),
      this.translateService.get('EXPERIENCEDETAILS_company3experience3'),

      this.translateService.get('EXPERIENCEDETAILS_companyName4'),
      this.translateService.get('EXPERIENCEDETAILS_position4'),
      this.translateService.get('EXPERIENCEDETAILS_startOfWork4'),
      this.translateService.get('EXPERIENCEDETAILS_endOfWork4'),
      this.translateService.get('EXPERIENCEDETAILS_company4experience1'),
      this.translateService.get('EXPERIENCEDETAILS_company4experience2')).subscribe(translations => {
        experienceCompaniesDetails = [{
          companyName: translations[0],
          positon: translations[1],
          startOfWork: translations[2],
          endOfWork: translations[3],
          experienceDescriptions: [translations[4], translations[5], translations[6]]
        }, {
          companyName: translations[7],
          positon: translations[8],
          startOfWork: translations[9],
          endOfWork: translations[10],
          experienceDescriptions: [translations[11], translations[12], translations[13]]
        }, {
          companyName: translations[14],
          positon: translations[15],
          startOfWork: translations[16],
          endOfWork: translations[17],
          experienceDescriptions: [translations[18], translations[19], translations[20]]
        }, {
          companyName: translations[21],
          positon: translations[22],
          startOfWork: translations[23],
          endOfWork: translations[24],
          experienceDescriptions: [translations[25], translations[26]]
        }];
      });

    return experienceCompaniesDetails;
  }

  getProject() {
    let projects: Project[] = [];
    Observable.combineLatest(
      this.translateService.get('PROJECTS_project1description'),
      this.translateService.get('SKILLS_backend9'),
      this.translateService.get('SKILLS_backend7'),
      this.translateService.get('SKILLS_frontend1'),
      this.translateService.get('SKILLS_frontend10'),
      this.translateService.get('SKILLS_backend10'),

      this.translateService.get('PROJECTS_project2description'),
      this.translateService.get('SKILLS_backend1'),
      this.translateService.get('SKILLS_backend11'),

      this.translateService.get('PROJECTS_project3description'),
      this.translateService.get('SKILLS_backend9'),
      this.translateService.get('SKILLS_backend7'),
      this.translateService.get('SKILLS_frontend1'),
      this.translateService.get('SKILLS_frontend9'),
      this.translateService.get('SKILLS_backend10'),

      this.translateService.get('PROJECTS_project4description'),
      this.translateService.get('SKILLS_backend9'),
      this.translateService.get('SKILLS_backend7'),
      this.translateService.get('SKILLS_frontend1'),
      this.translateService.get('SKILLS_frontend9'),

      this.translateService.get('PROJECTS_project5description'),
      this.translateService.get('SKILLS_backend12'),
      this.translateService.get('SKILLS_backend13'),
      this.translateService.get('SKILLS_backend6'),

      this.translateService.get('PROJECTS_project6description'),
      this.translateService.get('SKILLS_backend14'),
      this.translateService.get('SKILLS_backend6'),

      this.translateService.get('PROJECTS_project7description'),
      this.translateService.get('SKILLS_frontend4'),
      this.translateService.get('SKILLS_frontend11'),
      this.translateService.get('SKILLS_frontend9')).subscribe(translations => {
        projects = [{
          description: translations[0],
          technologies: [{
            name: translations[1],
            buttonColor: 'btn-success'
          },
          {
            name: translations[2],
            buttonColor: 'btn-success'
          },
          {
            name: translations[3],
            buttonColor: 'btn-success'
          },
          {
            name: translations[4],
            buttonColor: 'btn-success'
          },
          {
            name: translations[5],
            buttonColor: 'btn-success'
          }]
        },
        {
          description: translations[6],
          technologies: [{
            name: translations[7],
            buttonColor: 'btn-primary'
          },
          {
            name: translations[8],
            buttonColor: 'btn-primary'
          }]
        },
        {
          description: translations[9],
          technologies: [{
            name: translations[10],
            buttonColor: 'btn-success'
          },
          {
            name: translations[11],
            buttonColor: 'btn-success'
          },
          {
            name: translations[12],
            buttonColor: 'btn-success'
          },
          {
            name: translations[13],
            buttonColor: 'btn-success'
          },
          {
            name: translations[14],
            buttonColor: 'btn-success'
          }]
        },
        {
          description: translations[15],
          technologies: [{
            name: translations[16],
            buttonColor: 'btn-primary'
          },
          {
            name: translations[17],
            buttonColor: 'btn-primary'
          },
          {
            name: translations[18],
            buttonColor: 'btn-primary'
          },
          {
            name: translations[19],
            buttonColor: 'btn-primary'
          }]
        },
        {
          description: translations[20],
          technologies: [{
            name: translations[21],
            buttonColor: 'btn-success'
          },
          {
            name: translations[22],
            buttonColor: 'btn-success'
          },
          {
            name: translations[23],
            buttonColor: 'btn-success'
          }]
        },
        {
          description: translations[24],
          technologies: [{
            name: translations[25],
            buttonColor: 'btn-primary'
          }, {
            name: translations[26],
            buttonColor: 'btn-primary'
          }]
        },
        {
          description: translations[27],
          technologies: [{
            name: translations[28],
            buttonColor: 'btn-success'
          },
          {
            name: translations[29],
            buttonColor: 'btn-success'
          },
          {
            name: translations[30],
            buttonColor: 'btn-success'
          }]
        }];
      });

    return projects;
  }
}
