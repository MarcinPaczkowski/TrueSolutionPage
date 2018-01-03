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
    const experienceCompaniesDetails: ExperienceCompanyDetails[] = [{
      companyName: 'Predictes Sp. z o.o.',
      positon: 'Fullstack Developer',
      startOfWork: '03.2017',
      endOfWork: 'teraz',
      experienceDescriptions: [
        'udział w projektach 4-10 osobowych opartych o SCRUM',
        // tslint:disable-next-line:max-line-length
        'wytwarzanie aplikacji webowych w tym: integracji z systemami zewnętrznymi oraz paneli do zarządzania aplikacjami w technologiach .NET/.NET Core oraz Angular',
        'prowadzenie wewnętrznych szkoleń z języka C#']
    }, {
      companyName: 'inSync solutions Sp. z o.o.',
      positon: 'Fullstack Developer',
      startOfWork: '04.2016',
      endOfWork: '03.2017',
      experienceDescriptions: [
        'udział w projektach 3 osobowych opartych o SCRUM',
        'wytwarzanie aplikacji webowych w technologiach .NET Core oraz Angular',
        'wykorzystanie elementów metodyki programowania ekstremalnego']
    }, {
      companyName: 'Supremo Sp. z o.o.',
      positon: 'Junior .NET Software Developer / .NET Software Developer',
      startOfWork: '07.2014',
      endOfWork: '04.2016',
      experienceDescriptions: [
        'udział w projektach 2-3 osobowych opartych o Waterfall',
        'wytwarzanie rozszerzeń/modułów dla aplikacji klasy ERP (Comarch Altum oraz XL) oraz integracji z systemami zewnętrznymi',
        'prowadzenie wewnętrznych szkoleń z języka C#']
    }, {
      companyName: 'Cat Traffic Sp. z o.o.',
      positon: 'Stażysta',
      startOfWork: '07.2013',
      endOfWork: '01.2014',
      experienceDescriptions: [
        'wytwarzanie dedykowanych aplikacji biurkowych w technologii .NET',
        'montaż systemów elektroniki drogowej']
    }];

    return experienceCompaniesDetails;
  }

  getProject() {
    const projects: Project[] = [{
      description: 'Witryna wraz z panelem zarządzającym www.marktplatz.pl. Praca w zespole 4-osobowym.',
      technologies: [{
        name: 'ASP.NET Core MVC',
        buttonColor: 'btn-success'
      }, {
        name: 'Entity Framework Core',
        buttonColor: 'btn-success'
      }, {
        name: 'Angular',
        buttonColor: 'btn-success'
      }, {
        name: 'Bootstrap 4',
        buttonColor: 'btn-success'
      }, {
        name: 'Azure',
        buttonColor: 'btn-success'
      }]
    }, {
      // tslint:disable-next-line:max-line-length
      description: 'Integracja platformy CMS z szyną danych TIBCO. W ramach tego projektu byłem odpowiedzialny za implementację gotowego rozwiązania oraz ciągły kontakt z programistami TIBCO w języku angielskim. Praca w zesole 10-osobowym.',
      technologies: [{
        name: '.NET',
        buttonColor: 'btn-primary'
      }, {
        name: 'Kentico CMS',
        buttonColor: 'btn-primary'
      }]
    }, {
      // tslint:disable-next-line:max-line-length
      description: 'Aplikacja klasy BPM do zarządzania procesami w firmie. W ramach tego projektu byłem odpowiedzialny za design oraz implementację funkcjonalności aplikacji. Praca w zespole 3-osobowym.',
      technologies: [{
        name: 'ASP.NET Core MVC',
        buttonColor: 'btn-success'
      }, {
        name: 'Entity Framework Core',
        buttonColor: 'btn-success'
      }, {
        name: 'Angular',
        buttonColor: 'btn-success'
      }, {
        name: 'Bootstrap 3',
        buttonColor: 'btn-success'
      }, {
        name: 'Azure',
        buttonColor: 'btn-success'
      }]
    }, {
      // tslint:disable-next-line:max-line-length
      description: 'Aplikacja do rejestracji zleceń, składająca się z osobnego panelu dla klientów oraz administracji. Praca w zespole 3-osobowym.',
      technologies: [{
        name: 'ASP.NET Core MVC',
        buttonColor: 'btn-primary'
      }, {
        name: 'Entity Framework Core',
        buttonColor: 'btn-primary'
      }, {
        name: 'Angular',
        buttonColor: 'btn-primary'
      }, {
        name: 'Bootstrap 3',
        buttonColor: 'btn-primary'
      }]
    }, {
      // tslint:disable-next-line:max-line-length
      description: 'Aplikacja do nadzoru systemu parkingowego. W ramach tego projektu byłem odpowiedzialny za analizę biznesową, implementację gotowego rozwiązania oraz kontakt z klientem.',
      technologies: [{
        name: '.NET WinForms',
        buttonColor: 'btn-success'
      }, {
        name: '.NET Console Application',
        buttonColor: 'btn-success'
      }, {
        name: 'Entity Framework',
        buttonColor: 'btn-success'
      }]
    }, {
      description: 'Aplikacja do rejestracji czasu pracy. Praca w zespole 3-osobowym.',
      technologies: [{
        name: '.NET WPF',
        buttonColor: 'btn-primary'
      }, {
        name: 'Entity Framework',
        buttonColor: 'btn-primary'
      }]
    }, {
      // tslint:disable-next-line:max-line-length
      description: 'Responsywny sklep internetowy www.sklep.beabeleza.pl. W ramach tego projektu byłem odpowiedzialny za cięcie layoutu strony oraz osadzenie projektu strony na platformie Comarch ERP e-sklep. Praca w zespole 2-osobowym.',
      technologies: [{
        name: 'HTML5',
        buttonColor: 'btn-success'
      }, {
        name: 'CSS',
        buttonColor: 'btn-success'
      }, {
        name: 'Bootstrap 3',
        buttonColor: 'btn-success'
      }]
    }];

    return projects;
  }
}
