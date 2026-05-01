import { prisma } from "@/lib/prisma";
import OrderList from "./orderList";

async function getOrders() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          Product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // 🔥 SERIALIZE HERE
  const safeOrders = orders.map((order) => ({
    ...order,
    items: order.items.map((item) => ({
      ...item,
      price: Number(item.price), // ✅ FIX Decimal
    })),
  }));

  return safeOrders;
}

export default async function Page() {
  const orders = await getOrders();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      <OrderList orders={orders} />
    </div>
  );
}
