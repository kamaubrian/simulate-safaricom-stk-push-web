<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap>
            <v-flex xs12>
                <v-img
                        :src="require('../assets/contigency.png')"
                        class="my-3"
                        contain
                        height="200"
                ></v-img>
            </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center>
            <v-flex xs12 sm6>
                <Simulate/>
            </v-flex>
            <v-flex xs12 sm6>
                <v-btn @click.native="onNavigateToTransactions" outline round class="primary" large>See Transactions</v-btn>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import Simulate from '../components/simulate/Simulate'
    export default {
        components:{
          Simulate
        },
        data: () => ({

        }),
        async mounted() {
           this.$store.dispatch('fetchRecords');
        },
        methods:{
            onNavigateToTransactions(){
                this.$router.push('/payments')
            },

        }
    }
</script>

<style>

</style>
