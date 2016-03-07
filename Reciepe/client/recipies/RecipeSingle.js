//Meteor.subscribe('recipes');


//it helps to reuse it as it is not tighed to route but to template itself
Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id =FlowRouter.getParam('id');
		self.subscribe('singleRecipe',id);
	});
});



Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id =FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});