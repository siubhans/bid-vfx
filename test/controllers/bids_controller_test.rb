require "test_helper"

class BidsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bid = bids(:one)
  end

  test "should get index" do
    get bids_url, as: :json
    assert_response :success
  end

  test "should create bid" do
    assert_difference("Bid.count") do
      post bids_url, params: { bid: { client_id: @bid.client_id, fps: @bid.fps, project: @bid.project, resolution: @bid.resolution, user_id: @bid.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show bid" do
    get bid_url(@bid), as: :json
    assert_response :success
  end

  test "should update bid" do
    patch bid_url(@bid), params: { bid: { client_id: @bid.client_id, fps: @bid.fps, project: @bid.project, resolution: @bid.resolution, user_id: @bid.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy bid" do
    assert_difference("Bid.count", -1) do
      delete bid_url(@bid), as: :json
    end

    assert_response :no_content
  end
end
