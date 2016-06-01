var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical-reverse",
  mode: "extended"
});

var master = gitgraph.branch("master");

master.commit({
  sha1: "968367",
  message: "Initial commit",
  author: "Yash Srivastav",
  tag: "I"
});

master.commit({
  sha1: "adf2db",
  message: "Included pclub logo",
  author: "Yash Srivastav"
});

master.commit({
  sha1: "e47cc4",
  message: "Updated logo position",
  author: "Yash Srivastav"
});

var basic_time = master.branch("yashsriv/basic_time");
var weather = master.branch("subhdeep/weather");

basic_time.commit({
  sha1: "839587",
  message: "Added basic time",
  author: "Yash Srivastav"
});

basic_time.commit({
  sha1: "75d32c",
  message: "Added welcome screen",
  author: "Yash Srivastav"
});

basic_time.commit({
  sha1: "c5ec9f",
  message: "Beautified",
  author: "Yash Srivastav"
});

basic_time.merge(master, {
  message: "Merge pull request #1 from yashsriv/basic_time",
  author: "Yash Srivastav"
});

weather.commit({
  sha1: "1b972a",
  message: "added weather",
  author: "Subhdeep Saha"
});

weather.merge(master, {
  message: "Merge pull request #2 from subhdeep/weather",
  author: "Yash Srivastav"
});

var date = master.branch("abhinav/develop");

date.commit({
  sha1: "f8c6c7",
  message: "date added",
  author: "Abhinav Kumar Sharma"
});

date.commit({
  sha1: "ad1ca8",
  message: "indented",
  author: "Abhinav Kumar Sharma"
});

date.merge(master, {
  message: "Merge pull request #3 from abhinav/develop",
  author: "Yash Srivastav"
});

var calendar = master.branch({
  color: "#c6ff00",
  name: "yashsriv/calendar"
});

calendar.commit({
  sha1: "14763c",
  message: "Fixed formatting",
  author: "Yash Srivastav"
});

calendar.commit({
  sha1: "3ed8f9",
  message: "Added Google Calendar API",
  author: "Yash Srivastav"
});

calendar.merge(master, {
  message: "Merge pull request #4 from yashsriv/calendar",
  author: "Yash Srivastav"
});
