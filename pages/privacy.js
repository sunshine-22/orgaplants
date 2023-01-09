import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import style from "./style"


const Privacy=()=>{

return(
    <ScrollView style={style.backgroundcolor}>
        <View style={{margin:10}}>
            <Text style={style.privacyheading}>Terms of Service</Text>
            <Text style={style.privacytext}>At Orga Plants, accessible from orgaplants.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by orga plants and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in orgaplants. This policy is not applicable to any information collected offline or via channels other than this website.By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Text>
        </View>
        <View style={{margin:10}}>
            <Text style={style.privacyheading}>Privacy Policy</Text>
            <Text style={style.privacytext}>For the purposes of these Terms and Conditions:
                Country refers to: Karnataka, India Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Plants chain Pvt Ltd, Kadugodi, Bengaluru. Device means any device that can access the Service such as a computer, a cell phone or a digital tablet. Service refers to the Website. Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. Website refers to OrgaPlants, accessible from www.orgaplants.com You mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
        </View>
        <View style={{margin:10}}>
            <Text style={style.privacyheading}>Shipping & Delivery Policy</Text>
            <Text style={style.privacytext}>We also offer expedited shipping at the following rates!
                One day before order - 24 hrs, cost 20 rupees
                Instant - 2 hours, cost 30 rupees
                If you select an expedited shipping option, we will follow up after you have placed the order with any additional shipping information. All times and dates given delivery of the products are given in good faith but are estimates only.</Text>
        </View>
        <View style={{margin:10}}>
            <Text style={style.privacyheading}>Return and Refund Policy</Text>
            <Text style={style.privacytext}>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address: Orgaplants, #392, 2nd main, 3rd cross, Belathur Colony, Kadugodi, Bengaluru. We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items. We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</Text>
        </View>
    </ScrollView>

);

}

export default Privacy;