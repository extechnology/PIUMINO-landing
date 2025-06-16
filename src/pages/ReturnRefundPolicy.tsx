import React from 'react';
import { RefreshCw, Calendar, Mail, Package, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const ReturnRefundPolicy = () => {
  return (
    <>
    <Header />
    <div className="pt-20 pb-20 bg-gradient-to-br from-background to-primary/5 container mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">Return and Refund Policy</h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span>Last updated: June 14, 2025</span>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-green-800 font-medium">
            Thank you for shopping at www.piumino.in.
          </p>
          <p className="text-green-700 mt-2">
            If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.
          </p>
        </div>
        <p className="mt-4 text-gray-700">
          The following terms are applicable for any products that You purchased with Us.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        
        {/* Interpretation and Definitions */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interpretation and Definitions</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Interpretation</h3>
            <p className="text-gray-700 leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Definitions</h3>
            <p className="text-gray-700 mb-4">For the purposes of this Return and Refund Policy:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Company</span>
                <span className="text-gray-700"> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to SADAF ELASTOMERS, 15/617, KASHAYAPADI, FEROKE, Kozhikode, Kerala, 673631.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Goods</span>
                <span className="text-gray-700"> refer to the items offered for sale on the Service.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Orders</span>
                <span className="text-gray-700"> mean a request by You to purchase Goods from Us.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Service</span>
                <span className="text-gray-700"> refers to the Website.</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">Website</span>
                <span className="text-gray-700"> refers to www.piumino.in, accessible from www.piumino.in</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-900">You</span>
                <span className="text-gray-700"> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Your Order Cancellation Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Your Order Cancellation Rights
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="font-semibold text-green-800 mb-2">14-Day Cancellation Period</p>
              <p className="text-green-700">
                You are entitled to cancel Your Order within 14 days without giving any reason for doing so.
              </p>
            </div>
            
            <p>
              The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
            </p>
            
            <div>
              <p className="mb-3">
                In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center gap-2 text-blue-700">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">By email:</span>
                  <a href="mailto:info@piumino.in" className="underline hover:text-blue-900">
                    info@piumino.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-amber-800">
                <span className="font-medium">Reimbursement:</span> We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions for Returns */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-600" />
            Conditions for Returns
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Eligible Returns</h3>
            <p className="text-gray-700 mb-4">In order for the Goods to be eligible for a return, please make sure that:</p>
            <div className="bg-green-50 p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-4 h-4" />
                <span>The Goods were purchased in the last 14 days</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-4 h-4" />
                <span>The Goods are in the original packaging</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Non-Returnable Items</h3>
            <p className="text-gray-700 mb-4">The following Goods cannot be returned:</p>
            <div className="bg-red-50 p-4 rounded-lg space-y-2">
              <div className="flex items-start gap-2 text-red-700">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>The supply of Goods made to Your specifications or clearly personalized.</span>
              </div>
              <div className="flex items-start gap-2 text-red-700">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</span>
              </div>
              <div className="flex items-start gap-2 text-red-700">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</span>
              </div>
              <div className="flex items-start gap-2 text-red-700">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <p className="text-orange-800">
                <span className="font-medium">Sale Items:</span> Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.
              </p>
            </div>
          </div>
        </section>

        {/* Returning Goods */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Returning Goods</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:
            </p>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-800 mb-2">Important Notice</p>
                  <p className="text-red-700">
                    Check all the product details before order, expect the any manufacturing defect, we cannot allow refund and return policy to any customer.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800">
                <span className="font-medium">Shipping Responsibility:</span> We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our Returns and Refunds Policy, please contact us:
          </p>
          <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@piumino.in" className="underline">
              info@piumino.in
            </a>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ReturnRefundPolicy;