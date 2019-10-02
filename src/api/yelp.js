import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IYID3wN-Cim5P-6pUmpXE3cmZIS286DP6e5nAtocPV71oOTqi1jJWdduESjGD6qJeRk68WDvJyP1Kg4KM5Hi9a93oiVwiUJAfq5BZ39lFTRtMYlnHtG4Em57IuWQXXYx"
  }
});
