import React, { PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import {browserHistory} from 'react-router';

//ACCESSO AL SINGOLO ROUTE IN BASE AL LIVELLO
//AUTORIZAZIONE VIENE IMPOSTATOI SU TOUTE
//ESEMPIO:   <IndexRoute authorize={['Supervisor']} actions={['view-elenco','edit-elenco','delete-elenco']} component={ElencoCv} />
export function isAuthorized(props,session){
  const { routes } = props; // array of routes
  const route_redirect = browserHistory;

  // check if user data available
  const user = session.user;
  if (!user) {
    // redirect to login if not
    route_redirect.push('/login');
  }

  // prendiamo tutti i roli (livelli) impostati su route
  const routeRoles = _.chain(routes)
    .filter(item => item.authorize) // accesso al'attributo impostatro da noi che contiene l'arrray con i livelli : ['Supervisor','Administrator']
    .map(item => item.authorize)
    .flattenDeep()
    .value();
    console.log("ROUTES",routeRoles );
    console.log("ROUTES",routeRoles.includes(session.user.livello) );
  // facciamo il confronto tra route leveles e user levell
  //ROUTE ['Supervisor','Administrator']  
  //USER "Supervisor"
  if (!routeRoles.includes(session.user.livello) ) {
    route_redirect.push('/webapp/not-authorized');
    //console.log("Not permited on redirect.......")
  }else{
    console.log("OK PERMITED")
  }
  // console.log("MY SESSION",session.user.livello)
  // console.log("AUTOTHORIZED",routeRoles.includes( session.user.livello ) );  

}

//ACCESSO IN BASE A LIVELLO
//param 1 properti dell route
//param 2 nomi dei livello tipo,Supervisor 
//l'uso ['Supervisor','Administrato']
export function hasLevel(props,nameArray=new Array){
  const livello = props.session.user.livello;
  if(!Array.isArray(nameArray)) return false; 

  if(nameArray.includes(livello)){
    return true;
  }else{
    return false;
  }
}

//ACCESSO IN BASE ALLA AZIONE ERIDITATO DAL LIVELLO NON ERIDITATO, EDIT- DELETE- VIEW- ECT, ECT
//param 1 props he viene da connect con tutti i parametri
//param 2 chiave del permesso tipo campagna.write, elenco.delete ,cioe il permesso per ogni singolo azione
export function hasAction(props,action_act = null){
  const azioni = props.session.user.azioni;

  if(action_act == null ) return false;

  if( azioni.includes( action_act )){
    return true;
  }else{
    return false;
  }


}
//PER L'ACCESSO SOLO  AL ROUTE
//param 1 props he viene da connect con tutti i parametri
//param 2 chiave del permesso tipo campagna, elenco ,cioe il permesso su route
export function hasAuthorize(props,action_route=null){
  const route_redirect = browserHistory; //PER FARE REDIRECT SU ALTRA PAGINA
  const azioni  = props.session.user.azioni; //LISTA DI AZIONE CHE L'USER HA L'ACCESSO
  const user    = props.session.user;
  if (!user) {
    // redirect to login if not
    route_redirect.push('/login');
  }
  if(action_route != null){

    if(!azioni.includes( action_route )){ //se l'user non ha il permesso per l'acesso al router faciamo redirect.
       route_redirect.push('/webapp/noauthorize');
    }

  }else{

    route_redirect.push('/webapp/noauthorize');
  }
}