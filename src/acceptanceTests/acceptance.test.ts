Given I navigate to the user interface and create a PAL SD Video Reel
When I try and add NTSC SD video clip
Then user interface should prevent me from doing this action

Given I navigate to the user interface and create a PAL SD Video Reel
When I try and add PAL HD video clip
Then user interface should prevent me from doing this action

Given I navigate to the user interface and create a PAL SD Video Reel
When I add all the PAL SD video clips
Then the total duration displayed is 00:02:11:01

Given I navigate to the user interface and create a NTSC SD Video Reel
When I add all the NTSC SD video clips
Then the total duration displayed is 00:00:54:08