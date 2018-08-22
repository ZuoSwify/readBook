"use strict";define("forum/chats/recent",function(){var t={};t.init=function(){require(["forum/chats"],function(t){$('[component="chat/recent"]').on("click",'[component="chat/leave"]',function(){t.leave($(this).parents("[data-roomid]"));return false});$('[component="chat/recent"]').on("click",'[component="chat/recent/room"]',function(){var n=utils.findBootstrapEnvironment();if(n==="xs"||n==="sm"){app.openChat($(this).attr("data-roomid"))}else{t.switchChat($(this).attr("data-roomid"))}});$('[component="chat/recent"]').on("scroll",function(){var t=$(this);var e=(t[0].scrollHeight-t.height())*.9;if(t.scrollTop()>e){n()}})})};function n(){var t=$('[component="chat/recent"]');if(t.attr("loading")){return}t.attr("loading",1);socket.emit("modules.chats.getRecentChats",{uid:ajaxify.data.uid,after:t.attr("data-nextstart")},function(n,a){if(n){return app.alertError(n.message)}if(a&&a.rooms.length){e(a,function(){t.removeAttr("loading");t.attr("data-nextstart",a.nextStart)})}else{t.removeAttr("loading")}})}function e(t,n){if(!t.rooms.length){return n()}app.parseAndTranslate("chats","rooms",t,function(t){$('[component="chat/recent"]').append(t);t.find(".timeago").timeago();n()})}return t});
//# sourceMappingURL=public/src/client/chats/recent.js.map