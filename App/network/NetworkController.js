import axios from 'axios'

const url = "http://api.myclient247.com.au/CurrentClientsService.svc/GetCurrentClientsDetails"

const updateCurrentClients = 'http://api.myclient247.com.au/CurrentClientsService.svc/UpdateCurrentClient'
const updateDependantDetail = 'http://api.myclient247.com.au/CurrentClientsService.svc/UpdateDependantDetails'
const updateQualificationDetail = 'http://api.myclient247.com.au/CurrentClientsService.svc/UpdateQualificationDetails'
const updateEmploymentDetail = 'http://api.myclient247.com.au/CurrentClientsService.svc/UpdateEmploymentDetails'
const updateAddressDetails = 'http://api.myclient247.com.au/CurrentClientsService.svc/UpdateAddressDetails'

class NetworkController {
    
    async loginWithData(fileno, dob, mobile, email) {
        const response = await axios.post(url, {
            'ClientFileNo': fileno,
            'ClientDateofBirth': dob,
            'ClientMobileNo': mobile,
            'ClientEmailID': email
        }).catch((err) => {
            console.log(err);
        });

        return response
    }

    async updateUserProfile(data) {
        const response = await axios.post(updateCurrentClients, data).catch((err) => {
            console.log(err);
        })

        console.log(response)
    }

    async updateDependant(data) {
        const response = await axios.post(updateDependantDetail, data).catch((err) => {
            console.log(err);
        })

        console.log(response)
    }

    async updateEmployment(data) {
        const response = await axios.post(updateEmploymentDetail, data).catch((err) => {
            console.log(err);
        })

        console.log(response)
    }

    async updateAddress(data) {
        const response = await axios.post(updateAddressDetails, data).catch((err) => {
            console.log(err);
        })

        console.log(response)
    }

    async updateEducation(data) {
        const response = await axios.post(updateQualificationDetail, data).catch((err) => {
            console.log(err);
        })

        console.log(response)
    }

}

export default NetworkController