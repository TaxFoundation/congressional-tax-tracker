'use strict'

var allPlans = true;
var allIssues = true;

function togglePlan(name) {
  jQuery('#' + name).toggleClass('plan-tracker__plan-toggle--inactive');
  jQuery('.' + name + '-position').toggleClass('plan-tracker__position--inactive');
}

function toggleIssue(name) {
  jQuery('#' + name).toggleClass('plan-tracker__issue-toggle--inactive');
  jQuery('.' + name).toggleClass('plan-tracker__row--inactive');
}

function selectAllPlans() {
  var $plans = jQuery('.plan-tracker__plan-toggle');
  var $positions = jQuery('.plan-tracker__position');
  if (allPlans) {
    $plans.addClass('plan-tracker__plan-toggle--inactive');
    $positions.addClass('plan-tracker__position--inactive');
    jQuery('.plan-tracker__plan-select-all').text('Select All');
    allPlans = false;
  } else {
    $plans.removeClass('plan-tracker__plan-toggle--inactive');
    $positions.removeClass('plan-tracker__position--inactive');
    jQuery('.plan-tracker__plan-select-all').text('Deselect All');
    allPlans = true;
  }
}

function selectAllIssues() {
  var $issues = jQuery('.plan-tracker__issue-toggle');
  var $issueRow = jQuery('.plan-tracker__row');
  if (allIssues) {
    $issues.addClass('plan-tracker__issue-toggle--inactive');
    $issueRow.addClass('plan-tracker__row--inactive');
    jQuery('.plan-tracker__issue-select-all').text('Select All');
    allIssues = false;
  } else {
    $issues.removeClass('plan-tracker__issue-toggle--inactive');
    $issueRow.removeClass('plan-tracker__row--inactive');
    jQuery('.plan-tracker__issue-select-all').text('Deselect All');
    allIssues = true;
  }
}
