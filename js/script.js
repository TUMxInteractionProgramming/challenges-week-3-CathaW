//Check if js works
console.log('app is alive');

//Function to change the channels appearance for the channel list and the chat-app-bar
function switchChannel(channelName, locationName, image) {
    console.log('Tuning into channel' + channelName);
    console.log('Changing into location' + locationName);
    //Changes the channel name in the chat-app-bar
    $('#channelName').html(channelName);
    //Changes the active channel in the channel list to be selected
    $('li:contains(' + channelName + ')').addClass('selected');
    //Changes all inactive channels to be not selected
    $('li:not(:contains(' + channelName + '))').removeClass('selected');
    //Adds a w3words location link to the location in the chat-app-bar
    $('#channelLocation').html(locationName.link('https://map.what3words.com/'+locationName));
    //Adds an empty star to the chat-app-bar if the current channel is changed
    $('#star-icon').attr('src','https://ip.lfe.mw.tum.de/sections/'+ image +'.png');
}

//Function to fill the empty star-icon in the chat-app-bar if it is clicked
function switchFavorite(image) {
    $('#star-icon').attr('src','https://ip.lfe.mw.tum.de/sections/'+ image +'.png');
}

//Function to change the selected button in the channel-app-bar
function selectTab(tabID1, tabID2, tabID3) {
    //Unselected buttons are not highlighted 
    $('#'+tabID2).removeClass('selected');
    $('#'+tabID3).removeClass('selected');
    //Selected button is highlighted when it is clicked
    $('#'+tabID1).addClass('selected');
    console.log('changing to tab' + tabID1);
}