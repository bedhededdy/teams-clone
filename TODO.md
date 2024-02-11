# TODO
* Use env variables properly
* Use tailwindcss to reduce css overhead
* Get the tailwind vs extension
* Fix your component design, it's crap
* Remove notification-service, it's pointless
* You need to have a top level component manage messaging since
  it can affect both the sidebar and the main chat window (you can also
  look into a state management library like redux or mobx)
* Implement notifications (again, needs to be handled by top level component or you need to start
  hardcoding zindex values)
* Have a pending messages feature for messages that were not sent
* Fix the styling (don't use a component library, but see if you can find something
  that will at least make the default HTML components less ugly)
