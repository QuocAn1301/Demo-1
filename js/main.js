var chatBubble = document.getElementById("chatBubble");

        chatBubble.addEventListener("mousedown", dragStart);
        chatBubble.addEventListener("touchstart", dragStart);

        function dragStart(event) {
            event.preventDefault();

            if (event.type === "touchstart") {
                event.clientX = event.touches[0].clientX;
                event.clientY = event.touches[0].clientY;
            }

            var offsetX = event.clientX - chatBubble.getBoundingClientRect().left;
            var offsetY = event.clientY - chatBubble.getBoundingClientRect().top;

            document.addEventListener("mousemove", drag);
            document.addEventListener("touchmove", drag);
            document.addEventListener("mouseup", dragEnd);
            document.addEventListener("touchend", dragEnd);

            function drag(event) {
                event.preventDefault();

                if (event.type === "touchmove") {
                    event.clientX = event.touches[0].clientX;
                    event.clientY = event.touches[0].clientY;
                }

                var x = event.clientX - offsetX;
                var y = event.clientY - offsetY;

                chatBubble.style.left = x + "px";
                chatBubble.style.top = y + "px";
            }

            function dragEnd(event) {
                document.removeEventListener("mousemove", drag);
                document.removeEventListener("touchmove", drag);
                document.removeEventListener("mouseup", dragEnd);
                document.removeEventListener("touchend", dragEnd);
            }
        }

