<template>
    <div class="center min-vh-100">
        <div class="text-center">
            <h4 class="font-weight-bold">페이지를 찾을 수 없습니다.</h4>
            <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br/>입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
            <b-button variant="outline-primary" onclick="history.back()" class="mt-3">이전 화면</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '404'
    };
</script>
