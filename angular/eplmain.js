var eplApp = angular.module('EPL', ['ngRoute']);
eplApp.controller('displayallmatchescontroller', ['$http', function($http) {
    this.url1516 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
    this.url1617 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
    var main = this;
    this.allrounds = [];
    this.allrounds16 = [];
    this.allteams15 = [];
    this.allteams16 = [];
    this.totalscore;
    //this.teamcode=[];
    this.checkrepeatedvalues = function(name) {
        for (var i in main.allteams15) {
            if (main.allteams15[i].name === name) {
                return false;
            }
        }
        return true;
    }
    this.checkrepeatedvalues16 = function(name) {
        for (var i in main.allteams16) {
            if (main.allteams16[i].name === name) {
                return false;
            }
        }
        return true;
    }
    this.getallteams15 = function(rounds) {
        var index = 0;
        console.log(rounds);
        for (var i = 0; i < rounds.length; i++) {
            for (var j = 0; j < rounds[i].matches.length; j++) {
                var name = rounds[i].matches[j].team1.name;
                var checkval = main.checkrepeatedvalues(name);
                if (checkval) {
                    main.allteams15[index++] = rounds[i].matches[j].team1;
                    //main.teamcode[index]=rounds[i].matches[j].team1.code;
                }
                var name = rounds[i].matches[j].team2.name;
                var checkval = main.checkrepeatedvalues(name);
                if (checkval) {
                    main.allteams15[index++] = rounds[i].matches[j].team2;
                    //main.teamcode[index]=rounds[i].matches[j].team2.code;
                }
            }

        }
        //console.log(main.allteams15);
    }
    this.getallteams16 = function(rounds) {
        var index = 0;
        console.log(rounds);
        for (var i = 0; i < rounds.length; i++) {
            for (var j = 0; j < rounds[i].matches.length; j++) {
                var name = rounds[i].matches[j].team1.name;
                var checkval = main.checkrepeatedvalues16(name);
                if (checkval) {
                    main.allteams16[index++] = rounds[i].matches[j].team1;
                    //main.teamcode[index]=rounds[i].matches[j].team1.code;
                }
                var name = rounds[i].matches[j].team2.name;
                var checkval = main.checkrepeatedvalues16(name);
                if (checkval) {
                    main.allteams16[index++] = rounds[i].matches[j].team2;
                    //main.teamcode[index]=rounds[i].matches[j].team2.code;
                }
            }

        }
        console.log(main.allteams15);
    }

    this.getMatches15 = function() {
        $http({
            url: main.url1516,
            method: 'get'
        }).then(
            function successCallback(response) {
                //console.log(response);
                main.allrounds = response.data.rounds;
                main.getallteams15(response.data.rounds);

            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        );

    }
    this.getMatches15();
    this.getMatches16 = function() {
        $http({
            url: main.url1617,
            method: 'get'
        }).then(
            function successCallback(response) {
                //console.log(response);
                main.allrounds16 = response.data.rounds;
                main.getallteams16(response.data.rounds);

            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        );

    }
    this.getMatches16();

}]); //end of displayallmatchescontroller

eplApp.controller('displaysinglematch', ['$http', '$routeParams', function($http, $routeParams) {

    this.matchdate = $routeParams.date;
    this.code1 = $routeParams.team1;
    this.code2 = $routeParams.team2;
    var main = this;
    this.score1;
    this.score2;
    this.name1;
    this.name2;
    this.rounds = [];
    this.url15 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
    this.getdata = function() {
        $http({
            method: 'get',
            url: main.url15
        }).then(
            function successCallback(response) {
                main.rounds = response.data.rounds;
                //console.log(main.rounds);
                main.getalldetails(main.rounds);
            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        )
    }
    var f = false;
    this.getalldetails = function(rounds) {
        for (var i = 0; i < rounds.length; i++) {
            for (var j = 0; j < rounds[i].matches.length; j++) {
                if (rounds[i].matches[j].date === main.matchdate && rounds[i].matches[j].team1.code === main.code1 && rounds[i].matches[j].team2.code === main.code2) {

                    main.score1 = rounds[i].matches[j].score1;
                    main.score2 = rounds[i].matches[j].score2;
                    main.name1 = rounds[i].matches[j].team1.name;
                    main.name2 = rounds[i].matches[j].team2.name;

                    f = true;
                    break;
                }
                if (f == true) {
                    break;
                }
            }
        }
    }

    this.getdata();

}]);

eplApp.controller('displaysinglematch16', ['$http', '$routeParams', function($http, $routeParams) {

    this.matchdate = $routeParams.date;
    this.code1 = $routeParams.team1;
    this.code2 = $routeParams.team2;
    var main = this;
    this.score1;
    this.score2;
    this.name1;
    this.name2;
    this.rounds = [];
    this.url16 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
    this.getdata = function() {
        $http({
            method: 'get',
            url: main.url16
        }).then(
            function successCallback(response) {
                main.rounds = response.data.rounds;
                //console.log(main.rounds);
                main.getalldetails(main.rounds);
            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        )
    }
    var f = false;
    this.getalldetails = function(rounds) {
        for (var i = 0; i < rounds.length; i++) {
            for (var j = 0; j < rounds[i].matches.length; j++) {
                if (rounds[i].matches[j].date === main.matchdate && rounds[i].matches[j].team1.code === main.code1 && rounds[i].matches[j].team2.code === main.code2) {

                    main.score1 = rounds[i].matches[j].score1;
                    main.score2 = rounds[i].matches[j].score2;
                    main.name1 = rounds[i].matches[j].team1.name;
                    main.name2 = rounds[i].matches[j].team2.name;

                    f = true;
                    break;
                }
                if (f == true) {
                    break;
                }
            }
        }
    }

    this.getdata();

}]);

eplApp.controller('displayteamstat15controller', ['$http', '$routeParams', function($http, $routeParams) {
    var main = this;
    this.totalmatches = 0;
    this.totalgoals = 0;
    this.totalwins = 0;
    this.totallost = 0;
    this.totaldraws = 0;
    this.teamname;
    var url15 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
    this.teamcode = $routeParams.team;
    var rounds = [];
    var calculateStats = function(rounds) {
        console.log(rounds);
        for (round in rounds) {
            for (match in rounds[round].matches) {
                if (rounds[round].matches[match].team1.code == main.teamcode) {
                    main.teamname = rounds[round].matches[match].team1.name;
                    main.totalmatches++;
                    main.totalgoals += rounds[round].matches[match].score1;
                    if (rounds[round].matches[match].score1 > rounds[round].matches[match].score2) {
                        main.totalwins++;
                    }
                    if (rounds[round].matches[match].score1 < rounds[round].matches[match].score2) {
                        main.totallost++;
                    }
                } else if (rounds[round].matches[match].team2.code == main.teamcode) {
                    main.teamname = rounds[round].matches[match].team2.name;
                    main.totalmatches++;
                    main.totalgoals += rounds[round].matches[match].score2;
                    if (rounds[round].matches[match].score2 > rounds[round].matches[match].score1) {
                        main.totalwins++;
                    }
                    if (rounds[round].matches[match].score2 < rounds[round].matches[match].score1) {
                        main.totallost++;
                    }
                }
            }
            main.totaldraws = main.totalmatches - (main.totalwins + main.totallost);
        }
    }
    var getdata = function() {
        $http({
            url: url15,
            method: 'get'
        }).then(
            function successfullCallback(response) {
                //console.log(response);
                rounds = response.data.rounds;
                //console.log(rounds);
                calculateStats(rounds);
            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        )
    }
    getdata();
}]); //End displayteamstat15controller

eplApp.controller('displayteamstat16controller', ['$http', '$routeParams', function($http, $routeParams) {
    var main = this;
    this.totalmatches = 0;
    this.totalgoals = 0;
    this.totalwins = 0;
    this.totallost = 0;
    this.totaldraws = 0;
    this.teamname;
    var url16 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
    this.teamcode = $routeParams.team;
    var rounds = [];
    var calculateStats = function(rounds) {
        console.log(rounds);
        for (round in rounds) {
            for (match in rounds[round].matches) {
                if (rounds[round].matches[match].team1.code == main.teamcode) {
                    main.teamname = rounds[round].matches[match].team1.name;
                    main.totalmatches++;
                    main.totalgoals += rounds[round].matches[match].score1;
                    if (rounds[round].matches[match].score1 > rounds[round].matches[match].score2) {
                        main.totalwins++;
                    }
                    if (rounds[round].matches[match].score1 < rounds[round].matches[match].score2) {
                        main.totallost++;
                    }
                } else if (rounds[round].matches[match].team2.code == main.teamcode) {
                    main.teamname = rounds[round].matches[match].team2.name;
                    main.totalmatches++;
                    main.totalgoals += rounds[round].matches[match].score2;
                    if (rounds[round].matches[match].score2 > rounds[round].matches[match].score1) {
                        main.totalwins++;
                    }
                    if (rounds[round].matches[match].score2 < rounds[round].matches[match].score1) {
                        main.totallost++;
                    }
                }
            }
            main.totaldraws = main.totalmatches - (main.totalwins + main.totallost);
        }
    }
    var getdata = function() {
        $http({
            url: url16,
            method: 'get'
        }).then(
            function successfullCallback(response) {
                //console.log(response);
                rounds = response.data.rounds;
                //console.log(rounds);
                calculateStats(rounds);
            },
            function errorCallback(response) {
                console.log(response);
                alert('Some error occured. Please check console');
            }
        )
    }
    getdata();
}]); //End displayteamstat16controller