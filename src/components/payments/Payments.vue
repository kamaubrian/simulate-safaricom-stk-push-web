<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-layout>
        <v-container grid-list-md fluid>
            <v-layout row wrap v-if="loading">
                <v-flex xs12 class="text-xs-center">
                    <v-progress-circular indeterminate class="primary--text"
                                         :width="7"
                                         :size="70"
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
            <v-layout row wrap v-else class="text-xs-center">
                <v-flex xs12>
                    <v-card class="elevation-4">
                        <v-card-title>
                            <h4 class="primary--text">Transactions</h4>
                            <v-spacer></v-spacer>
                            <v-text-field
                                    name="Search"
                                    label="Search Payment"
                                    v-model="search"
                                    ></v-text-field>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                    :headers="headers"
                                    :items="payments"
                                    :expand="expand"
                                    :search="search"
                            >
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-left">{{ props.item.emailAddress }}</td>
                                    <td class="text-xs-left">{{ props.item.transactionId }}</td>
                                    <td class="text-xs-left">{{ props.item.phoneNumber }}</td>
                                    <td class="text-xs-left">{{ props.item.transactionTime }}</td>
                                </template>

                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                expand: false,
                search: '',
                headers: [
                    {
                        text: 'Email Address',
                        align: 'left',
                        sortable: false,
                        value: 'emailAddress'
                    },
                    {text: 'Transaction Code', value: 'transactionId'},
                    {text: 'Phone Number', value: 'phoneNumber'},
                    {text: 'Transaction Time', value: 'transactionTime'}
                ],
                payments: [{
                    _id: '',
                    emailAddress: '',
                    phoneNumber: '',
                    transactionId: '',
                    transactionTime: ''
                }]
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        async created() {
            await this.$store.dispatch('fetchRecords');
            this.payments = await this.$store.getters.payments
        },
        async mounted() {
            await this.$store.dispatch('fetchRecords');
            this.payments = await this.$store.getters.payments
        }

    }
</script>