import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BracketService } from '../services/bracket.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-admin-bracket',
  templateUrl: './admin-bracket.component.html',
  styleUrls: ['./admin-bracket.component.css']
})
export class AdminBracketComponent implements OnInit {
  players:{[login: string]: string};
  bracketForm:FormGroup;

  constructor(
    private bracketService:BracketService,
    private authService:AuthService,
    private playerService:PlayerService,
    private router:Router,
    public fb: FormBuilder
    ) { 
      this.players=playerService.getall();
      this.bracketForm = this.createReactiveForm();
    }

  ngOnInit(): void {

  }

  private createReactiveForm(){
    return this.fb.group({
     playerSelect: ['', [Validators.required]],
   });
 }

  onSubmit(){

  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  update() {
    let item:any ={
      'upper_bracket':{
        matches:{
          'w1_1':[
            {'name':"$i$s$e09P$fffy$e09'$z$s $ff$F00W$FFFowit $f00?",'score':120},
            {'name':'$i$s$555H$fffe$50fx$fffag$b00o$fffn$0f4i$fffa','score':118},
            {'name':'$000The $sP$500y$000ramid$z $000of $sAL Gàbir','score':24},
            {'name':'[RPG] $069An$06Co$26Fyo, $F69Ko$F6Cno$F6Fyo','score':22}
          ],
          'w1_2':[
            {'name':'$309Mi$409ne$509rv$609a-$933B','score':120},
            {'name':'$i$s$FEC L$FC3a$FECy$F96a$FECl$F93i $FC3 A$FECls$F96a$FECm$F93a','score':118},
            {'name':'$i$fffThe Heap of $6a6D$595e$494s$484p$373a$272i$262r','score':24},
            {'name':'$i$s$F90F$FA2o$FA3r$FB5t$FC7u$FC8n$FDAe$FEC $FEDo$FFFf$FFF $FEDt$FEBh$FD9e$FC8 $FB6D$FB4a$FA2w$F90n','score':22}
          ],
          'w1_3':[
            {'name':'robert9','score':120},
            {'name':'robert10','score':118},
            {'name':'robert11','score':24},
            {'name':'robert12','score':22}
          ],
          'w1_4':[
            {'name':'robert13','score':120},
            {'name':'robert14','score':118},
            {'name':'robert15','score':24},
            {'name':'robert16','score':22}
          ],
          'w1_5':[
            {'name':'robert17','score':120},
            {'name':'robert18','score':118},
            {'name':'robert19','score':24},
            {'name':'robert20','score':22}
          ],
          'w1_6':[
            {'name':'robert21','score':120},
            {'name':'robert22','score':118},
            {'name':'robert23','score':24},
            {'name':'robert24','score':22}
          ],
          'w1_7':[
            {'name':'robert25','score':120},
            {'name':'robert26','score':118},
            {'name':'robert27','score':24},
            {'name':'robert28','score':22}
          ],
          'w1_8':[
            {'name':'robert29','score':120},
            {'name':'robert30','score':118},
            {'name':'robert31','score':24},
            {'name':'robert32','score':22}
          ],
          'w2_1':[
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert5','score':24},
            {'name':'robert6','score':22}
          ],
          'w2_2':[
            {'name':'robert9','score':120},
            {'name':'robert10','score':118},
            {'name':'robert13','score':24},
            {'name':'robert14','score':22}
          ],
          'w2_3':[
            {'name':'robert17','score':120},
            {'name':'robert18','score':118},
            {'name':'robert21','score':24},
            {'name':'robert22','score':22}
          ],
          'w2_4':[
            {'name':'robert25','score':120},
            {'name':'robert26','score':118},
            {'name':'robert29','score':24},
            {'name':'robert30','score':22}
          ],
          'w3_1':[
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert9','score':24},
            {'name':'robert10','score':22}
          ],
          'w3_2':[
            {'name':'robert17','score':120},
            {'name':'robert18','score':118},
            {'name':'robert25','score':24},
            {'name':'robert26','score':22}
          ],
          'w4_1':[
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert17','score':24},
            {'name':'robert18','score':22}
          ],
          'w5_1':[
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
        }
      },
      'lower_bracket':{
        matches:{
          'l1_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l1_2':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l1_3':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l1_4':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l2_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l2_2':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l2_3':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l2_4':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l3_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l3_2':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l4_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l4_2':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l5_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
          'l6_1':[ 
            {'name':'robert1','score':120},
            {'name':'robert2','score':118},
            {'name':'robert3','score':24},
            {'name':'robert4','score':22}
          ],
        }
      }
    };
    this.bracketService.update(item).subscribe();
  }

}
