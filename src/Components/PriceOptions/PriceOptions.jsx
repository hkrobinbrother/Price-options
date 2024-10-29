

const PriceOptions = ({options}) => {

    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 personal training session per month",
            "Free Wi-Fi",
            "Access to cardio machines",
            "Shower facilities",
            "24/7 access on weekdays"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "4 personal training sessions per month",
            "Access to group fitness classes",
            "Free fitness assessment",
            "Nutritional tips and guidance",
            "Access to stretching area",
            "Priority equipment booking",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 70,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "8 personal training sessions per month",
            "Unlimited group fitness classes",
            "Sauna access",
            "Nutritional guidance",
            "Access to exclusive training zones",
            "Access to wellness workshops",
            "Private locker",
            "Free gym apparel (T-shirt or cap)"
          ]
        },
        {
          "id": 4,
          "name": "Ultimate Plan",
          "price": 100,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "12 personal training sessions per month",
            "Unlimited group fitness classes",
            "Sauna and steam room access",
            "Advanced nutritional guidance",
            "Customized workout plan",
            "Access to all premium facilities",
            "Priority customer support",
            "Massage therapy sessions",
            "Dedicated personal trainer",
            "Monthly wellness consultation",
            "Discount on gym merchandise",
            "Free guest pass each month",
            "Parking validation"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                PriceOptions.map(option => <PriceOptions key={option.id} option={option}>
                  <h3>{option.name}</h3>
                  <p>price: ${option.price}</p>
                  <ul>
                            {option.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                </PriceOptions>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;