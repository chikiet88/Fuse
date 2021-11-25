import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { DanhsachnhanvienModule } from './danhsachnhanvien/danhsachnhanvien/danhsachnhanvien.module';
import { DanhsachComponent } from './danhsach/danhsach.component';
DanhsachnhanvienModule
const routes = [
    {
        path        : '/danhsachnhanvien',
        loadChildren: () => import('./danhsachnhanvien/danhsachnhanvien/danhsachnhanvien.module').then(m => m.default)
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule
    ],
    declarations: [DanhsachComponent]
})
export class HrmsModule
{

}
