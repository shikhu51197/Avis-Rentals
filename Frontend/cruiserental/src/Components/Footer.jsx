import React from 'react'
import "../styles/footer.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion"
import {Box} from "@chakra-ui/react"
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="f-childs">
          <h2>TOP US DESTINATIONS</h2>
          <li>Travel Guides</li>
          <li>Car Rental Las Vegas</li>
          <li>Car Rental Los Angeles</li>
          <li>Car Rental Chicago</li>
          <li>Car Rental Orlando</li>
          <li>Car Rental Miami</li>
        </div>

        <div className="f-childs">
          <h2>RENTAL CAR TYPES</h2>
          <li>One-Way Airport Car Rental</li>
          <li>Luxury Car Rental</li>
          <li>Pickup Truck Rental</li>
          <li>Van Rental</li>
          <li>SUV Rental</li>
          <li>Rental Car Sizes—Sedans</li>
        </div>

        <div className="f-childs">
          <h2>AVIS EXTRAS</h2>
          <li>Rental Car Products</li>
          <li>Car Rental Services</li>
          <li>Protections & Coverages</li>
          <li>Loss Damage Waiver</li>
          <li>Roadside Assistance</li>
          
        </div>

        <div className="f-childs">
          <h2>AVIS PARTNERS</h2>
          <li>Affiliates</li>
          <li>Travel Agents</li>
          <li>Military & Veterans</li>
          <li>Airline Points Partners</li>
          <li>Hotel Points Partners</li>
          
        </div>


        <div className="f-childs">
          <h2>COMPANY INFO</h2>
          <li>About Avis</li>
          <li>Best Price Pledge</li>
          <li>Avis Careers</li>
          <li>Site Map</li>
          <li>Hotel Points Partners</li>
          <li>Lost & Found</li>
          <li>We Try Harder</li>
          <li>Accessibility</li>
        </div>

        <div className="f-childs">
          <h2>SECURITY & PRIVACY</h2>
          <li>Terms Of Use</li>
          <li>Privacy Notice</li>
          <li>Your Privacy Choices</li>
          <li>Copyright Notices</li>
          <li>Hotel Points Partners</li>
          <li>Fraud & Scams</li>
          
        </div>

        <div className='f-small'>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box width="lg" as="span" flex='1' textAlign='left'>
        TOP US DESTINATIONS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div className='small-fchild'>
          <li>Travel Guides</li>
          <li>Car Rental Las Vegas</li>
          <li>Car Rental Los Angeles</li>
          <li>Car Rental Chicago</li>
          <li>Car Rental Orlando</li>
          <li>Car Rental Miami</li>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        RENTAL CAR TYPES
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='small-fchild'>
    <li>One-Way Airport Car Rental</li>
          <li>Luxury Car Rental</li>
          <li>Pickup Truck Rental</li>
          <li>Van Rental</li>
          <li>SUV Rental</li>
          <li>Rental Car Sizes—Sedans</li>
          </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h2>AVIS EXTRAS</h2>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='small-fchild'>
    
          <li>Rental Car Products</li>
          <li>Car Rental Services</li>
          <li>Protections & Coverages</li>
          <li>Loss Damage Waiver</li>
          <li>Roadside Assistance</li>
          </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h2>AVIS PARTNERS</h2>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='small-fchild'>
    
    
          <li>Affiliates</li>
          <li>Travel Agents</li>
          <li>Military & Veterans</li>
          <li>Airline Points Partners</li>
          <li>Hotel Points Partners</li>
          </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h2>COMPANY INFO</h2>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='small-fchild'>
    
    
          <li>About Avis</li>
          <li>Best Price Pledge</li>
          <li>Avis Careers</li>
          <li>Site Map</li>
          <li>Hotel Points Partners</li>
          <li>Lost & Found</li>
          <li>We Try Harder</li>
          <li>Accessibility</li>
          </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <h2>SECURITY & PRIVACY</h2>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='small-fchild'>
          <li>Terms Of Use</li>
          <li>Privacy Notice</li>
          <li>Your Privacy Choices</li>
          <li>Copyright Notices</li>
          <li>Hotel Points Partners</li>
          <li>Fraud & Scams</li>
          </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </div>
      </div>
    </div>
  )
}

export default Footer
