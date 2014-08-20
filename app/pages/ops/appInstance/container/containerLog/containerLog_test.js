/*
* Copyright (c) 2013 DataTorrent, Inc. ALL Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

describe('Controller: ContainerLogCtrl', function() {

  var $scope, $routeParams, breadcrumbs;

  beforeEach(module('app.pages.ops.appInstance.container.containerLog', function($provide) {
    $provide.value('webSocket', {
      subscribe: jasmine.createSpy(),
      unsubscribe: jasmine.createSpy()
    });
    $provide.value('breadcrumbs', breadcrumbs = {
      options: {}
    });
  }));

  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $routeParams = {
      appId: 'app1',
      containerId: 'ctnr1',
      logName: 'log1'
    };
    $controller('ContainerLogCtrl', {
      $scope: $scope,
      $routeParams: $routeParams,
      dtText: {}
    });
  }));

  it('should set breadcrumbs.options to their appropriate replacements', function() {
    expect(breadcrumbs.options['App Instance']).toEqual('app1');
    expect(breadcrumbs.options.Container).toEqual('ctnr1');
    expect(breadcrumbs.options.ContainerLog).toEqual('log1');
  });

});