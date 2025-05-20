#Input

A list of 6 user profiles with the following properties:

image – avatar image (same for all or different)

name – user's name

occupation – job title

description – a brief description

showThumbnail – whether to display as thumbnail or expanded

#Process

Create a ProfileCard component that displays each profile.

Use ScrollView to allow vertical scrolling.

Use Flexbox to arrange the cards:

flexDirection: 'row'

flexWrap: 'wrap'

width: '48%' for each card to make 2 columns per row

Map through the profile data and render each ProfileCard inside the grid layout.

Use state (showThumbnail) to allow each card to expand/collapse when pressed.

#Output

A scrollable screen that displays:

6 profile cards

In a 2-column grid layout

On a single vertical page

Each card can expand or collapse on tap

Cards display profile photo, name, job, and description when expanded
