Feature: Fetching Top gainers list
I want to visit MC and fetch top gainers list for the day

Scenario: Fetching NIFTY top gainers list

Given I launch MC site
When I am on homepage
Then I search for top gainers
  And I fetch top gainers list