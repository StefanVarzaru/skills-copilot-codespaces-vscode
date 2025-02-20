function skillsMember() {
    return {
        'name': 'skillsMember',
        'restrict': 'E',
        'templateUrl': 'app/components/members/skillsMember.html',
        'controller': 'SkillsMemberController',
        'controllerAs': 'skillsMemberCtrl',
        'bindToController': true,
        'scope': {
            'member': '=',
            'skills': '='
        }
    };
}