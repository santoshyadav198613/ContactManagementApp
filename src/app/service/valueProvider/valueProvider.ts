import { IValueProvider } from './IvalueProvider';

import { InjectionToken } from '@angular/core';

export let APPCONFIG = new InjectionToken<IValueProvider>('valueProvider');

export let AppConstants: IValueProvider = {
    apiEndPoint: 'https://jsonplaceholder.typicode.com/',
    pageSize: 20,
    pageSizeOptions: [20, 40, 60]
}