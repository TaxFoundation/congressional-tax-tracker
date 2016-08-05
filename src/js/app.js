var allPlans = false;
var allIssues = false;

function showPlans() {
  if ($('.plans-note')) {
    $('.plans-note').remove();
  }

  if ($('.plan-list').hasClass('inactive')) {
    $('.plan-list').removeClass('inactive');
    $('.plan-toggle').removeClass('rotate');
  } else {
    $('.plan-list').addClass('inactive');
    $('.plan-toggle').addClass('rotate');
  }
}

function showIssues() {
  if ($('.issues-note')) {
    $('.issues-note').remove();
  }

  if ($('.issues-list').hasClass('inactive')) {
    $('.issues-list').removeClass('inactive');
    $('.issue-toggle').removeClass('rotate');
  } else {
    $('.issues-list').addClass('inactive');
    $('.issue-toggle').addClass('rotate');
  }
}

function togglePlan(name) {
  var $plan = $('#' + name);
  var $positions = $('.' + name + '-position');
  if ($plan.hasClass('plan-tracker__plan-toggle--inactive')) {
    $plan.removeClass('plan-tracker__plan-toggle--inactive');
    $positions.removeClass('inactive');
  } else {
    $plan.addClass('plan-tracker__plan-toggle--inactive');
    $positions.addClass('inactive');
  }
}

function toggleIssue(name) {
  var $issue = $('#' + name);
  var $issueRow = $('.' + name);
  if ($issue.hasClass('row-inactive')) {
    $issue.removeClass('row-inactive');
  } else {
    $issue.addClass('row-inactive');
  }
}

function selectAllPlans() {
  var $plans = $('.plan-list').children();
  if (!allPlans) {
    $plans.addClass('active');
    $('.plan-position').removeClass('inactive');
    allPlans = true;
  } else {
    $plans.removeClass('active');
    $('.plan-position').addClass('inactive');
    allPlans = false;
  }
}

function selectAllIssues() {
  var $issues = $('.issue-item');
  if (!allIssues) {
    $issues.addClass('active');
    $('.issue-row').removeClass('row-inactive');
    allIssues = true;
  } else {
    $issues.removeClass('active');
    $('.issue-row').addClass('row-inactive');
    allIssues = false;
  }
}
