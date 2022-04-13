import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderProduct, OrderProductDocument } from 'src/order-product/schemas/order-product.schemas';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        @InjectModel(OrderProduct.name) private orderProductModel: Model<OrderProductDocument>
    ) { }

    async findAll() {
        return this.orderModel.find();
    }
    async search(textSearch) {
        let regex = new RegExp(textSearch, "i");
        return await this.orderModel.find({ code: regex }).populate(
            {
                path: "orderProducts",
                select: "amount price",
                model: "OrderProduct",
                populate: {
                    path: "product",
                    select: "title photoURL",
                    model: "Product"
                }
            });
    }

    async findOrderByAmount(year) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29
        } else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            status: "Thành công"
        })
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            status: "Thành công"
        })
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            status: "Thành công"
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            status: "Thành công"
        });
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            status: "Thành công"
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            status: "Thành công"
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            status: "Thành công"
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            status: "Thành công"
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            status: "Thành công"
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            status: "Thành công"
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            status: "Thành công"
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            status: "Thành công"
        });
        resp.push([
            {
                label: 'Tháng 1',
                amount: monthJanurary.length
            },
            {
                label: 'Tháng 2',
                amount: monthFeburary.length
            },
            {
                label: 'Tháng 3',
                amount: monthMatch.length
            },
            {
                label: 'Tháng 4',
                amount: monthApril.length
            },
            {
                label: 'Tháng 5',
                amount: monthMay.length
            },
            {
                label: 'Tháng 6',
                amount: monthJune.length
            },
            {
                label: 'Tháng 7',
                amount: monthJuly.length
            },
            {
                label: 'Tháng 8',
                amount: monthAugust.length
            },
            {
                label: 'Tháng 9',
                amount: monthSeptember.length
            },
            {
                label: 'Tháng 10',
                amount: monthOctober.length
            },
            {
                label: 'Tháng 11',
                amount: monthNovember.length
            },
            {
                label: 'Tháng 12',
                amount: monthDecember.length
            },

        ]);
        return resp;

    }

    async findOrderByRevenue(year) {
        let dayOfFeburary = 0;
        if (year % 4 == 0) {
            dayOfFeburary = 29
        } else {
            dayOfFeburary = 28;
        }
        let resp = [];
        let monthJanurary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 0, 1),
                $lt: new Date(year, 0, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        })
        let monthFeburary = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 1, 1),
                $lt: new Date(year, 1, dayOfFeburary)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        })
        let monthMatch = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 2, 1),
                $lt: new Date(year, 2, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthApril = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 3, 1),
                $lt: new Date(year, 3, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        })
        let monthMay = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 4, 1),
                $lt: new Date(year, 4, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthJune = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 5, 1),
                $lt: new Date(year, 5, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthJuly = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 6, 1),
                $lt: new Date(year, 6, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthAugust = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 7, 1),
                $lt: new Date(year, 7, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthSeptember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 8, 1),
                $lt: new Date(year, 8, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthOctober = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 9, 1),
                $lt: new Date(year, 9, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthNovember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 10, 1),
                $lt: new Date(year, 10, 30)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        let monthDecember = await this.orderModel.find({
            createdAt: {
                $gte: new Date(year, 11, 1),
                $lt: new Date(year, 11, 31)
            },
            status: "Thành công"
        }).exec().then(result => {
            let total = 0;
            result.forEach(item => total += item.totalPrice.valueOf());
            return total;
        });
        resp.push([
            {
                label: 'Tháng 1',
                revenue: monthJanurary
            },
            {
                label: 'Tháng 2',
                revenue: monthFeburary
            },
            {
                label: 'Tháng 3',
                revenue: monthMatch
            },
            {
                label: 'Tháng 4',
                revenue: monthApril
            },
            {
                label: 'Tháng 5',
                revenue: monthMay
            },
            {
                label: 'Tháng 6',
                revenue: monthJune
            },
            {
                label: 'Tháng 7',
                revenue: monthJuly
            },
            {
                label: 'Tháng 8',
                revenue: monthAugust
            },
            {
                label: 'Tháng 9',
                revenue: monthSeptember
            },
            {
                label: 'Tháng 10',
                revenue: monthOctober
            },
            {
                label: 'Tháng 11',
                revenue: monthNovember
            },
            {
                label: 'Tháng 12',
                revenue: monthDecember
            },

        ]);
        return resp;

    }

    async findByUser(user) {
        return this.orderModel.find({ createdBy: user }).populate(
            {
                path: "orderProducts",
                select: "amount price",
                model: "OrderProduct",
                populate: {
                    path: "product",
                    select: "title photoURL",
                    model: "Product"
                }
            });
    }

    async create(orderDto: OrderDto, orderProductDto, user) {
        let order = new this.orderModel({ ...orderDto });
        order.createdBy = user;
        let total = 0;
        orderProductDto.forEach(item => {
            let orderProduct = new this.orderProductModel(item);
            total += item.price;
            orderProduct.order = order._id;
            orderProduct.save();
            order.orderProducts.push(orderProduct._id)
        })
        order.totalPrice = total;
        return order.save();
    }

    async editStatus(orderId, status) {
        let order = await this.orderModel.findById(orderId);
        order.status = status;
        return order.save();
    }

    async delete(orderId) {
        let order = await this.orderModel.findById(orderId);
        let orderProducts = await this.orderProductModel.find({ order: order._id });
        orderProducts.forEach(item => item.remove())
        return order.remove();
    }
}
