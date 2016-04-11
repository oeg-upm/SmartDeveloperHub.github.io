/*
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  This file is part of the Smart Developer Hub Project:
    http://www.smartdeveloperhub.org
  Center for Open Middleware
        http://www.centeropenmiddleware.com/
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  Copyright (C) 2015 Center for Open Middleware.
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
            http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
*/

//ANGULAR INITIALIZATION


//TEAM LIST
angular.module('teamApp', []);

angular.element(".teamContainer").ready(function () {

    angular.bootstrap(document.body, ['teamApp']);
});

$(document).ready(function(){
    var teamM = [
        {
            name: "Fernando Serena",
            avatar: "images/fserena.jpeg",
            email: "fernando.serena@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/fernando-serena-7575a63b"
        },
        {
            name: "Carlos Blanco Vallejo",
            avatar: "images/cblanco.png",
            email: "carlos.blanco@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/carlos-blanco-vallejo-05443013"
        },
        {
            name: "Miguel Esteban Gutiérrez",
            avatar: "images/mesteban.jpg",
            email: "miguel.esteban@centeropenmiddleware.com"
        },
        {
            name: "Alejandro Vera",
            avatar: "images/avera.jpg",
            email: "carlos.blanco@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/alejandroveradejuan"
        },
        {
            name: "María Poveda",
            avatar: "images/mpoveda.jpg",
            email: "mpoveda@fi.upm.es",
            linkedin: "https://es.linkedin.com/in/mpovedavillalon"
        },
        {
            name: "Alejandro F. Carrera",
            avatar: "images/Foto_Carnet_afc.png",
            email: "alejandro.fernandez.carrera@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/alejandrofcarrera"
        },
        {
            name: "Ignacio Molina Cuquerella",
            avatar: "images/nacho.png",
            email: "imolina@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/ignacio-molina-cuquerella-73172825"
        },
        {
            name: "Andrés García",
            avatar: "images/andres.jpg",
            email: "hgarcia@fi.upm.es",
            linkedin: "https://es.linkedin.com/in/andrés-garcía-silva-b0304015"
        },
    ];
    $scope = angular.element(".teamContainer").scope();

    $scope.$apply(function () {
        $scope.teamM = teamM;
    });
}) 