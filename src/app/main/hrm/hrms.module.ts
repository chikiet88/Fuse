import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { DanhsachnhanvienModule } from './danhsachnhanvien/danhsachnhanvien/danhsachnhanvien.module';
import { DanhsachComponent } from './danhsach/danhsach.component';
DanhsachnhanvienModule
const routes = [
    {
        path        : '/danhsachnhanvien',
        loadChildren: './danhsachnhanvien/danhsachnhanvien/danhsachnhanvien.module'
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
