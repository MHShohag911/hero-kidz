export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
    <div
      style="
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
      "
    >

      <!-- Hero Kidz Logo -->
      <table
        role="presentation"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="border-collapse: collapse; margin-bottom: 20px;"
      >
        <tbody>
          <tr>
            <td style="vertical-align: middle; padding-right: 8px;">
              <img
                src="https://i.ibb.co.com/XrgNzYTG/image.png"
                width="50"
                alt="Hero Kidz Logo"
                style="
                  display: block;
                  width: 50px;
                  height: auto;
                  border: 0;
                "
              />
            </td>

            <td style="vertical-align: middle;">
              <h2
                style="
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                  font-size: 20px;
                  line-height: 24px;
                  font-weight: 900;
                  color: #111111;
                "
              >
                Hero <span style="color: #E43900;">Kidz</span>
              </h2>
            </td>
          </tr>
        </tbody>
      </table>

      

      <h2 style="margin: 0 0 15px 0;">
        🧾 Order Invoice
      </h2>

      <p style="margin-bottom: 20px;">
        Order ID: <strong>${orderId}</strong>
      </p>

      <table
        width="100%"
        border="1"
        cellspacing="0"
        cellpadding="8"
        style="
          border-collapse: collapse;
          width: 100%;
        "
      >
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="center">Qty</th>
            <th align="right">Price</th>
          </tr>
        </thead>

        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td>${item.title}</td>
                  <td align="center">${item.quantity}</td>
                  <td align="right">৳${item.price}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>

      <h3 style="margin-top: 20px; text-align: right;">
        Total: ৳${totalPrice}
      </h3>

      <p style="margin-top: 30px;">
        Thank you for shopping with Hero Kidz ❤️
      </p>

    </div>
  `;
};