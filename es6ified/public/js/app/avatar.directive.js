import template from './avatar.html!text'

export default function avator(){
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {
      user: '=user',
      showDetails: '&'
    }
    // link(scope, element, attrs, controller){
    //   console.log('link function called')
    // },
  }
}
