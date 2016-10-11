/**
 * Created by gviloria on 10/11/16.
 */
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log("Hello client");
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'otherHelperFunction': function(){
      return "Some other function";
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}