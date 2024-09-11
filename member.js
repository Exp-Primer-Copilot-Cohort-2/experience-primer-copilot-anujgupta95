function skillsMember(){
    return {
        restrict: "E",
        templateUrl: 'modules/skills/views/member.htal', 
        controller: 'Skills/fenderController',
        controllerAs: 'vm',
        bindToConotroller : true,
        scope: {
            members: 'm'
        } 
    };
}