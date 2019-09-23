// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { Permission } from './permission.model';


export class ApiResource {

    constructor(name?: string, description?: string, permissions?: Permission[]) {

        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }

    public id: string;
    public enabled: number;
    public name: string;
    public displayName: string;
    public description: string;
    public usersCount: number;
    public permissions: Permission[];
}
