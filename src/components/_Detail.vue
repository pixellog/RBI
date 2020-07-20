<template>
    <b-modal id="modal-detail" header-class="p-0 d-block" body-class="p-0" centered hide-header-close hide-footer scrollable>
        <template v-slot:modal-header="{ close }">
            <div class="bg-dark text-white px-3 py-2">그룹 A, 그룹 B</div>
            <div class="bg-white p-3 d-flex align-items-center">
                <div>
                    <h5 class="mb-0 mt-2">한화건설 - 포레나루원시티 2</h5>
                    <small class="text-secondary">인천광역시 서구 가정동 255-23</small>
                </div>
                <b-button @click="close()" variant="light" class="ml-auto bg-white border-0 p-0">
                    <b-icon icon="x" font-scale="2"></b-icon>
                </b-button>
            </div>
        </template>

        <div style="background-color:#d3d8e3;" class="py-1">
            <div class="m-2 shadow-sm" v-for="item in 3">
                <h6 class="text-danger px-3 py-2 mb-0 rounded-top" style="background-color:#f2f2f2;">
                    소음센서 #한화건설 포레나 루원시티 소음센서 {{item}}
                </h6>
                <div class="bg-white rounded-bottom w-100" style="min-height: 200px;">
                    <Graph class="w-100"/>
<!--                    <img src="/assets/images/graph.png" alt="" class="rounded-bottom">-->
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
    import Graph from "./_Graph";
    export default {
        name: 'Detail',
        components: {Graph},
    }
</script>
