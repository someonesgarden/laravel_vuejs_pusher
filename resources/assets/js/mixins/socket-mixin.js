import axios from 'axios';

export default {

    methods: {
        pusher_alert: function () {
            Pusher.logToConsole = true; //ログを有効にする

            var pusher = new Pusher('d9643801fdc4cedfd84b', {
                cluster: 'ap1',
                encrypted: true
            });

            //購読するチャンネルを指定
            var pusherChannel = pusher.subscribe('test_channel');

            //イベントを受信したら、alertする
            pusherChannel.bind('test_event', function (data) {
                alert(data.message);
            });
        }
    }



}