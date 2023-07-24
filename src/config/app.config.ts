interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'AMZ._.skboy',
  addOns: ['notifications', 'chat', 'file'],
};
