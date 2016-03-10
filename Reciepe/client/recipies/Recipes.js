//Meteor.subscribe('recipes');


//it helps to reuse it as it is not tighed to route but to template itself
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});



Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});

Template.Recipes.events({
		'click .new-recipe': () => {
			Session.set('newRecipe', true);
		}
});