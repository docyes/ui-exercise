# ui-exercise

This is the 10e UI exercise for front end candidates.

The exercise has been created to provide you with a bootstrapped installation
of many popular JS frameworks.  Each installation has been prepped to give you
the necessary framework so that you don't have to spend any time setting up
an environment, allowing you to just jump in and start coding.

The main point of this exercise is to give you a chance to show us how you code,
so you really shouldn't spend any time fiddling with settings or configurations.
Just write code and solve the problem at hand.

## Getting started

Fork this repo to your own account, then:

```
$ git clone https://github.com/YOUR_GITHUB_USERNAME/ui-exercise.git
... implement your solution ...
$ git commit -am ''
$ git push
```

Then send us the link to your forked repo.

You will see that we have prepared a number of popular frameworks for you to
work with.  You should complete the exercise using one of these frameworks.

If you are not familiar with any of them, we have also created a vanilla app
using jQuery.

The available pre-configured apps are:

* [React](reactjs)
* [Ember](emberjs)
* [Angular](angularjs)
* [jQuery](jquery)

Each pre-configured app contains it's own README with specific details about
that particular framework.

## The exercise

One common feature in a front end client is to display a list of resources to
a user, and then allow the user to view or edit those resource.

Typically those resources will be available through some API.  In our code
challenge, you will implement a user facing app that retrieves a list of `widgets`
from an API and displays them to the user.  When the user clicks on one of the
widgets, you will display a detail view of the widget.

In the list view of the widgets, you will also implement filters so that the user
can filter widgets on the `name` and `size` fields.

For the purposes of this exercise, the API has been mocked out for you.  Each
of the installed frameworks contains an API client, which you should use to
retrieve the list of widgets from the API.

See each framework's README for that particular client's interface
documentation.

## Objectives

Our main interest is to see how you code -- how you organize code, your use of
best practices and to see how much you grasp the fundamentals of front end
engineering.

Therefore, it is important that we see some actual code.  We don't necessarily
expect you to complete all of the features mentioned above, however, if you do
before your time is up, that is the appropriate time to go back through your
code and perform clean up tasks, or add tests, or do whatever you think will
show us your skill set in the most effective way.
