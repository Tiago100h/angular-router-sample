import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    // snapshot only gets the initial value of the parameter map with this technique. 
    // Use the observable paramMap approach if there's a possibility 
    // that the router could re-use the component.

    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')!))
    );

    // const id = this.route.snapshot.paramMap.get('id');
    // this.crisis$ = this.service.getCrisis(id);
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id: null;
    // Relative navigation back to the crises
    this.router.navigate(['../crises', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}