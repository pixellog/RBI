<template>
    <div>
        <div class="min-vh-100">
            <iframe class="w-100 min-vh-100 border" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAQhNs6tR3QVqrJTAZxne2c3E28-iwVwvo&q=Space+Needle,Seattle+WA" allowfullscreen></iframe>
        </div>

        <b-modal id="modal-login" content-class="bg-transparent border-0" header-class="border-0" body-class="p-0" centered hide-header-close hide-footer scrollable no-close-on-backdrop>
            <div class="p-5 text-center bg-info" style="border-radius: 1rem 1rem 0 0;">
                <h1 class="text-white font-weight-light display-4" style="letter-spacing: -3px">Super Admin</h1>
                <img src="/assets/images/icon.png" alt="" style="width: 126px;" class="mt-3">
            </div>
            <div class="p-5 bg-white" style="border-radius: 0 0 1rem 1rem;">
                <b-input placeholder="skp" class="rounded-0"></b-input>
                <b-input type="password" value="1234" class="rounded-0 mt-3"></b-input>
                <b-button size="lg" block class="mt-4 btn-gradient shadow-sm" squared to="/main">로그인</b-button>
                <b-row no-gutters class="mt-3">
                    <b-checkbox checked="true">아이디 기억하기</b-checkbox>
                    <b-checkbox class="ml-5">자동 로그인</b-checkbox>
                </b-row>
            </div>
            <b-row no-gutters class="mt-3">
                <small class="text-white-50">이용에 문제가 있을 때는 아래 전화번호로 연락해 도움을 받으시기 바랍니다.<br>
                    HELP : 031-0000-0000</small>
                <img src="/assets/images/skp-logo.svg" alt="" class="ml-auto" style="width:80px; margin-top: -5px;">
            </b-row>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        mounted() {
            this.$bvModal.show('modal-login');
        }
    }
</script>
