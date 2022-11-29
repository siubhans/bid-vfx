require "test_helper"

class ShotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shot = shots(:one)
  end

  test "should get index" do
    get shots_url, as: :json
    assert_response :success
  end

  test "should create shot" do
    assert_difference("Shot.count") do
      post shots_url, params: { shot: { bid_id: @shot.bid_id, days: @shot.days, description: @shot.description, image: @shot.image, methodology: @shot.methodology, name: @shot.name, notes: @shot.notes, scene: @shot.scene, total: @shot.total, vfx_work: @shot.vfx_work } }, as: :json
    end

    assert_response :created
  end

  test "should show shot" do
    get shot_url(@shot), as: :json
    assert_response :success
  end

  test "should update shot" do
    patch shot_url(@shot), params: { shot: { bid_id: @shot.bid_id, days: @shot.days, description: @shot.description, image: @shot.image, methodology: @shot.methodology, name: @shot.name, notes: @shot.notes, scene: @shot.scene, total: @shot.total, vfx_work: @shot.vfx_work } }, as: :json
    assert_response :success
  end

  test "should destroy shot" do
    assert_difference("Shot.count", -1) do
      delete shot_url(@shot), as: :json
    end

    assert_response :no_content
  end
end
