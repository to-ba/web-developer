WebDeveloper.Popup.Forms = {};

$(function() 
{ 
	$("#clear-radio-buttons").click(WebDeveloper.Popup.Forms.clearRadioButtons);
	$("#convert-form-gets-to-posts").click(function() { WebDeveloper.Popup.Forms.convertFormMethods("post"); });
	$("#convert-form-posts-to-gets").click(function() { WebDeveloper.Popup.Forms.convertFormMethods("get"); });
	$("#convert-select-elements-to-text-inputs").click(WebDeveloper.Popup.Forms.convertSelectElementsToTextInputs);
	$("#display-form-details").click(WebDeveloper.Popup.Forms.displayFormDetails);
	$("#enable-auto-completion").click(WebDeveloper.Popup.Forms.enableAutoCompletion);
	$("#enable-form-fields").click(WebDeveloper.Popup.Forms.enableFormFields);
	$("#make-form-fields-writable").click(WebDeveloper.Popup.Forms.makeFormFieldsWritable);
	$("#populate-form-fields").click(WebDeveloper.Popup.Forms.populateFormFields);
	$("#remove-maximum-lengths").click(WebDeveloper.Popup.Forms.removeMaximumLengths);
	$("#show-passwords").click(WebDeveloper.Popup.Forms.showPasswords);
	$("#view-form-information").click(WebDeveloper.Popup.Forms.viewFormInformation);
});

// Adds a feature on a tab
WebDeveloper.Popup.Forms.addFeatureOnTab = function(tab, scriptCode)
{
	WebDeveloper.Popup.addFeatureOnTab(tab, "features/javascript/forms.js", scriptCode);
};
	
// Clears all radio buttons
WebDeveloper.Popup.Forms.clearRadioButtons = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.clearRadioButtons(document);");
	});
};
	
// Converts the methods of all forms
WebDeveloper.Popup.Forms.convertFormMethods = function(method)
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, 'WebDeveloper.Forms.convertFormMethods("' + method + '", document);');
	});
};
	
// Converts select elements to text inputs
WebDeveloper.Popup.Forms.convertSelectElementsToTextInputs = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.convertSelectElementsToTextInputs(document);");
	});
};
	
// Displays the details about all forms
WebDeveloper.Popup.Forms.displayFormDetails = function()
{
	var featureItem = $(this);

	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		var feature = featureItem.attr("id");
    var display = !chrome.extension.getBackgroundPage().WebDeveloper.Storage.isFeatureOnTab(feature, tab);

		WebDeveloper.Popup.Forms.toggleFeatureOnTab(featureItem, tab, "WebDeveloper.Forms.displayFormDetails(" + display + ", document);");
	});
};
	
// Enables auto completion on all elements
WebDeveloper.Popup.Forms.enableAutoCompletion = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.enableAutoCompletion(document);");
	});
};
	
// Enables all form fields
WebDeveloper.Popup.Forms.enableFormFields = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.enableFormFields(document);");
	});
};
	
// Makes all form fields writable
WebDeveloper.Popup.Forms.makeFormFieldsWritable = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.makeFormFieldsWritable(document);");
	});
};
	
// Populates all form fields
WebDeveloper.Popup.Forms.populateFormFields = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.populateFormFields(document);");
		
		window.close();
	});
};
	
// Removes maximum lengths from all elements
WebDeveloper.Popup.Forms.removeMaximumLengths = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.removeMaximumLengths(document);");
	});
};
	
// Shows all passwords
WebDeveloper.Popup.Forms.showPasswords = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
		WebDeveloper.Popup.Forms.addFeatureOnTab(tab, "WebDeveloper.Forms.showPasswords(document);");
	});
};

// Toggles a feature on a tab
WebDeveloper.Popup.Forms.toggleFeatureOnTab = function(featureItem, tab, scriptCode)
{
	WebDeveloper.Popup.toggleFeatureOnTab(featureItem, tab, "features/javascript/forms.js", scriptCode);
};
	
// Displays information about all forms
WebDeveloper.Popup.Forms.viewFormInformation = function()
{
	WebDeveloper.Popup.getSelectedTab(function(tab)
	{
	  chrome.tabs.sendRequest(tab.id, {type: "get-forms"}, function(response) 
	  {
			WebDeveloper.Popup.openGeneratedTab(chrome.extension.getURL("generated/view-form-information.html"), tab, response);
	  });
	});
};