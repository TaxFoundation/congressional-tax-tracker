var allPlans = true;
var allIssues = true;

function togglePlan(name) {
  var $plan = $('#' + name);
  var $positions = $('.' + name + '-position');
  if ($plan.hasClass('plan-tracker__plan-toggle--inactive')) {
    $plan.removeClass('plan-tracker__plan-toggle--inactive');
    $positions.removeClass('plan-tracker__position--inactive');
  } else {
    $plan.addClass('plan-tracker__plan-toggle--inactive');
    $positions.addClass('plan-tracker__position--inactive');
  }
}

function toggleIssue(name) {
  var $issue = $('#' + name);
  var $issueRow = $('.' + name);
  if ($issue.hasClass('plan-tracker__issue-toggle--inactive')) {
    $issue.removeClass('plan-tracker__issue-toggle--inactive');
    $issueRow.removeClass('plan-tracker__row--inactive');
  } else {
    $issue.addClass('plan-tracker__issue-toggle--inactive');
    $issueRow.addClass('plan-tracker__row--inactive');
  }
}

function selectAllPlans() {
  var $plans = $('.plan-tracker__plan-toggle');
  var $positions = $('.plan-tracker__position');
  if (allPlans) {
    $plans.addClass('plan-tracker__plan-toggle--inactive');
    $positions.addClass('plan-tracker__position--inactive');
    $('.plan-tracker__plan-select-all').text('Select All');
    allPlans = false;
  } else {
    $plans.removeClass('plan-tracker__plan-toggle--inactive');
    $positions.removeClass('plan-tracker__position--inactive');
    $('.plan-tracker__plan-select-all').text('Deselect All');
    allPlans = true;
  }
}

function selectAllIssues() {
  var $issues = $('.plan-tracker__issue-toggle');
  var $issueRow = $('.plan-tracker__row');
  if (allIssues) {
    $issues.addClass('plan-tracker__issue-toggle--inactive');
    $issueRow.addClass('plan-tracker__row--inactive');
    $('.plan-tracker__issue-select-all').text('Select All');
    allIssues = false;
  } else {
    $issues.removeClass('plan-tracker__issue-toggle--inactive');
    $issueRow.removeClass('plan-tracker__row--inactive');
    $('.plan-tracker__issue-select-all').text('Deselect All');
    allIssues = true;
  }
}
