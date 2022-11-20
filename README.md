# Lab 8 - Starter
Krish Dandiwala

1. Yes, I would place automated tests within a Github action that runs whenever code is pushed so that each new code addition is properly tested. That way, receiving immediate feedback from failed tests allows the developer to fix bugs in their new code more efficiently and early on in the development cycle. 
2. No, I wouldn't use end to end testing for a single function because it would be unnecessary. E2E testing is meant for simulating user input from start to finish which might end up testing way more functionality than the intended single function. 
3. No, I wouldn't use a unit test to test the message feature of a messaging application since it should be tested in relation to other aspects of the application such as delivery status, accuracy, and the intended recipient. 
4. Yes, I would use a unit test to check the max length of a message as it is encapsulated and not reliant on any other feature of the application. It would execute quickly and changing the other-app features won't affect this unit test. 
